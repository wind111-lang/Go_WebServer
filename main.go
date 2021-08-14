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
} //Page構造体

func Handler(w http.ResponseWriter, r *http.Request) {
	link := Page{"Connection Status", 1} //ページ名,回数
	temp, err := template.ParseFiles("./files/connection.html")
	//表示させるページ

	if err != nil {
		panic(err)
	}
	err = temp.Execute(w, link) //実行

	addr, err := net.InterfaceAddrs()
	/*IPAddr,SubnetAddr,BroadcastAddr(IPv4)
	  IPAddr/NetPrefix(IPv6)を返す*/

	//fmt.Println(addr)　チェック用
	fmt.Println("------------------------------")
	for _, addr := range addr {
		fmt.Println(addr.String()) //IPアドレスの出力
	}
}

func main() {
	http.HandleFunc("/", Handler) //ハンドラの呼び出し
	fmt.Println("Server Open")
	log.Fatal(http.ListenAndServe(":8080", nil))
	//指定したアドレスとハンドラをもつ HTTPサーバをオープンさせる(異常があった場合は強制終了)
}
