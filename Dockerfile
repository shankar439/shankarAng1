FROM nginx:latest
RUN rm -rf /usr/share/nginx/html/*
ADD dist/shankarAng /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT [ "nginx" , "-g" , "daemon off;"]