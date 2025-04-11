# Use lightweight Alpine-based NGINX image
FROM nginx:alpine

# Copy static website files to NGINX's default serving directory
COPY ./portfolio /usr/share/nginx/html

# SSL Setup
#COPY ./nginx.conf /etc/nginx/nginx.conf
#COPY ./ssl /etc/nginx/ssl

# Expose port 80 for HTTP traffic
EXPOSE 80

# Start NGINX in foreground mode
CMD ["nginx", "-g", "daemon off;"]
