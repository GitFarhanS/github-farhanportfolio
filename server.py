import http.server
import socketserver
from urllib.parse import urlparse, parse_qs
import os
from pathlib import Path

PORT = 1234
BASE_DIR = Path(__file__).parent / 'out'  # Serve files from the 'out' directory

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Parse the URL to check for custom image serving
        parsed_path = urlparse(self.path)
        if parsed_path.path.startswith("/_next/image"):
            # Parse query string to get parameters like 'url', 'w', and 'q'
            query_params = parse_qs(parsed_path.query)
            if 'url' in query_params:
                # Decode the image URL
                image_path = query_params['url'][0]
                # Remove leading slash from the path
                image_path = image_path.lstrip('/')
                
                # Build the absolute path to the image file inside the 'out' folder
                full_image_path = BASE_DIR / image_path
                
                # Check if the image file exists
                if full_image_path.exists() and full_image_path.is_file():
                    # Serve the image
                    self.send_response(200)
                    # Set appropriate Content-type based on the image extension
                    if full_image_path.suffix == '.png':
                        self.send_header('Content-type', 'image/png')
                    elif full_image_path.suffix in ['.jpg', '.jpeg']:
                        self.send_header('Content-type', 'image/jpeg')
                    elif full_image_path.suffix == '.gif':
                        self.send_header('Content-type', 'image/gif')
                    else:
                        self.send_header('Content-type', 'application/octet-stream')
                    self.end_headers()
                    with open(full_image_path, 'rb') as img_file:
                        self.wfile.write(img_file.read())
                else:
                    # Image file not found
                    self.send_error(404, "Image not found")
            else:
                # URL parameter missing
                self.send_error(400, "Missing 'url' parameter")
        else:
            # Adjust the path to serve from 'out' directory for non-image requests
            self.path = f'/out{self.path}'
            super().do_GET()

# Set up the server to serve from the 'out' directory
os.chdir(BASE_DIR)

with socketserver.TCPServer(("", PORT), CustomHTTPRequestHandler) as httpd:
    print(f"Serving from 'out' at port {PORT}")
    httpd.serve_forever()
