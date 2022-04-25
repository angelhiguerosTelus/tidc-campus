# In the business.telus.com file

include /etc/nginx/includes/business_redirects.conf

# In the includes/business_redirects.conf file

rewrite ^/en/business/cloud-phone-systems$ https://www.telus.com/business/business-connect-voip permanent;
rewrite ^/en/business/new-products$ https://www.telus.com/business/new-products permanent;
rewrite ^/en/business/support$ https://www.telus.com/business/support permanent;
