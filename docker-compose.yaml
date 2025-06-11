version: '3.8'

services:
  php:
    image: php:8.2-fpm-alpine # Using PHP 8.2 FPM on Alpine Linux
    container_name: tlc_php
    volumes:
      - ./:/var/www/html # Mount your project directory
    working_dir: /var/www/html

  nginx:
    image: nginx:alpine
    container_name: tlc_nginx
    ports:
      - "8080:80" # Access your site at http://localhost:8080
    volumes:
      - ./:/var/www/html # Mount your project directory for static files
      - ./nginx/default.conf:/etc/nginx/conf.d/default.conf # Mount Nginx config
    depends_on:
      - php