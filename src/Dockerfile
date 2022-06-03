#use nginx to serve the app ##
FROM nginx:alpine

##Remove default nginx website
RUN fm - rf /usr/share/nginx/html/*

##copy over the artifacts in dist folder to default nginx pub folder
COPY /dist/OSDAngularProject  /usr/share/nginx/html

##nginx will run in the foreground

CMD ["nginx","-g","daemon off;"]
