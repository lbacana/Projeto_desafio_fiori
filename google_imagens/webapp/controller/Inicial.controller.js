sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("googleimagens.controller.Inicial", {
            onInit: function () {
            // Colchete indica que a variável é do tipo tabela interna no ABAP
            let ImageList = {
                Imagens : [
            //     {
            //        url : "https://www.iuf.org/wp-content/uploads/2020/09/Coca-Cola-Header.jpg",
            //        thumbnail : "https://rapidapi.usearch.com/api/thumbnail/get?value=1574528931575308325",
            //        title : "Coca-Cola - IUF",
            //        provider : {
            //            name: "iuf",
            //        }
            //     },
            //     {
            //        url : "https://productplacementblog.com/wp-content/uploads/2017/12/Diet-Coke-Coca-Cola-Edo-Japan-and-Manchu-Wok-in-Saved-2.jpg",
            //        thumbnail : "https://rapidapi.usearch.com/api/thumbnail/get?value=4672777275365406776",
            //        title : "Diet Coke, Coca-Cola, Edo Japan And Manchu Wok In Saved! (2004)",
            //        provider : {
            //            name: "productplacementblog"
            //       }
            //     },
            //     {
            //        url : "https://img.yumpu.com/51789413/1/117x151/pepsi-revised-story.jpg?quality=85",
            //        thumbnail : "https://rapidapi.usearch.com/api/thumbnail/get?value=580148335407608069",
            //        title : "Pepsi Magazines",
            //        provider : {
            //            name: "yumpu"
            //        }
            //     }                                     
                ]
            };
            // Criação do modelo para exibir dados na tela
            let ImageModel = new JSONModel(ImageList);
            let view = this.getView();
            view.setModel(ImageModel, "ModeloImagem");

            },
            onPressBuscar: function(){
                let inputBusca = this.byId("InpBusca");
                let query = inputBusca.getValue();
            //    alert(query);
            const settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q="
                + query 
                + "&pageNumber=1&pageSize=10&autoCorrect=true",
                "method": "GET",
                "headers": {
                    "X-RapidAPI-Key": "f6c7a1688dmsh93416a4ec3e2b9fp15f90cjsn4c10c8735d42",
                    "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com"
                }
            };
            //Parentesis serve para passar parâmetros
            //Callback: uma função executada no final de outra função
            $.ajax(settings).done(function (response) {
                console.log(response);
            
                // Instanciar o modelo
                let oImageModel = this.getView().getModel("ModeloImagem");
                let oDadosImage = oImageModel.getData();
                //Clear tabela interna = array
                oDadosImage.Imagens = [];
                //Loop que adiciona dados de uma tabela em outra tabela
                let listaResultados = response.value;
                let newItem;
                //Vamos ao Loop = For
                for (var i = 0; i < listaResultados.length; i++){
                    //Read table pelo indice
                    newItem = listaResultados[i];
                    //Append dados na nova tabela
                    oDadosImage.Imagens.push(newItem);
                }
            oImageModel.refresh();
            }.bind(this)
            );
            }
        });
    });
