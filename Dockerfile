FROM node:20 as client 
WORKDIR /app

COPY ./client/package*.json .
RUN npm install --production
COPY ./client/ .
RUN npm run build 

FROM python:3.12-alpine
WORKDIR /app
COPY --from=client /app/build /app/build
COPY ./flask-server /app
RUN pip install -r requirements.txt

EXPOSE 5000
CMD ["/bin/sh", "-c", "flask --app server run -h 0.0.0.0 -p 5000"] 