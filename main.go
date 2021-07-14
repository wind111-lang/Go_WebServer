package main

import (
	"fmt"
	"html/template"
	"log"
	"net"
	"net/http"
)

type Page struct {
	Title string
	Count int
}

func Handler(w http.ResponseWriter, r *http.Request) {
	NetInterface, _ := net.InterfaceAddrs()
	for _, NetInterface := range NetInterface {
		netIP, ok := NetInterface.(*net.IPNet)
		if ok && !netIP.IP.IsLoopback() && netIP.IP.To4() != nil {
			IPaddr := netIP.String()

			fmt.Println("Connected IP: " + IPaddr)
		}
	}
	link := Page{"Indian Poker", 1}
	temp, err := template.ParseFiles("./files/last_kadai.html")
	if err != nil {
		panic(err)
	}
	err = temp.Execute(w, link)
}

func main() {
	http.HandleFunc("/", Handler)
	fmt.Println("Server Open")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
