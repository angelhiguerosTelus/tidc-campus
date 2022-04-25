server {
    listen 80;
    server_name www.telus.com;
    return 301 https://$server_name;
  }
  
  server {
    listen 443
    server_name www.telus.com;
    ssl on;
    ssl_certificate /etc/server.crt;
    ssl_certificate_key /etc/server.key;
    
    rest of configuration...
  }
  