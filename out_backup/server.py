import http.server
import socketserver
from urllib.parse import urlparse, parse_qs
import os
from pathlib import Path

PORT = 1234
BASE_DIR = Path(__file__).parent

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Parse the URL to check for custom image serving
        parsed_path = urlparse(self.path)
        if parsed_path.path == "/_next/image":
            # Parse query string to get parameters like 'url', 'w', and 'q'
            query_params = parse_qs(parsed_path.query)
            if 'url' in query_params:
                # Decode the image URL
                image_path = query_params['url'][0]
                # Remove leading slash from the path
                image_path = image_path.lstrip('/')
                
                # Build the absolute path to the image file
                full_image_path = BASE_DIR / image_path
                
                # Check if the image file exists
                if full_image_path.exists() and full_image_path.is_file():
                    # Serve the image
                    self.send_response(200)
                    self.send_header('Content-type', 'image/png')  # Adjust MIME type as necessary
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
            # For any other requests, serve files normally
            super().do_GET()

# Set up the server
with socketserver.TCPServer(("", PORT), CustomHTTPRequestHandler) as httpd:
    print(f"Serving at port {PORT}")
    httpd.serve_forever()
