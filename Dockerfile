FROM node:20 as client 
WORKDIR /app

COPY ./client/package*.json .
RUN npm install --production
COPY ./client/ .
RUN npm run build 

FROM python:3.12-alpine
WORKDIR /app
COPY --from=client /app/build /app
COPY ./flask-server /app
RUN pip install -r requirements.txt

EXPOSE 5000
CMD ["python", "app.py"] 