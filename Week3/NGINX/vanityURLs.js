 location = / {
    set $homepage https://site-builder.openshiftapps.com;
    proxy_pass $global_homepage;
  }
  
  location / {
        proxy_intercept_errors on;
        proxy_set_header Host $server_name;
        proxy_set_header X-Forwarded-For $remote_addr;
        proxy_redirect http:// $scheme://;
        proxy_pass http://$proxy_backend;
  }
  
  
  
  
  
  
  