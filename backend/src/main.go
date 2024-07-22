package main

import (
    "net/http"
    "github.com/gin-gonic/gin"
)

func main() {
    r := gin.Default()

    r.Use(func(c *gin.Context) {
        c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
        c.Writer.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
        c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type")
        c.Next()
    })

    r.GET("/api/crypto-prices", func(c *gin.Context) {
        data := []map[string]string{
            {"name": "Bitcoin", "value": "30000"},
            {"name": "Ethereum", "value": "2000"},
        }
        c.JSON(http.StatusOK, data)
    })

    r.Run(":3000")
}
