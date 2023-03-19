

FROM nginx:alpine
#mainline-alpine-slim
#RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/nginx.conf
#COPY nginx.conf /etc/nginx/conf.d/default.conf
#RUN echo "/n/n/n"
#RUN cat /etc/nginx/nginx.conf
#RUN echo "/n/n/n"



#COPY certs /etc/letsencrypt
RUN sed -i 's|text/plain|application/javascript|g' /etc/nginx/mime.types


#CMD ["nginx", "-g", "daemon off;"]
#EXPOSE 443
