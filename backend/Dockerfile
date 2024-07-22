FROM golang:1.18

WORKDIR /app

COPY go.mod ./
COPY go.sum ./
RUN go mod download

COPY src/ ./

RUN go mod tidy
RUN go build -o main .

EXPOSE 3000

CMD ["./main"]
