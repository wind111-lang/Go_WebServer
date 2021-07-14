package main

import (
	"fmt"
	"html/template"
	"log"
	"net/http"
)
type Page struct{
	Title string
	Count int
}

func Handler(w http.ResponseWriter, r *http.Request){
	link := Page{"Indian Poker",1}
	temp,err := template.ParseFiles("./files/last_kadai.html")
	if err != nil{
		panic(err)
	}
	err = temp.Execute(w,link)
}

func main()  {
	http.HandleFunc("/",Handler)
	fmt.Println("Server Open")
	log.Fatal(http.ListenAndServe(":8080", nil))
}