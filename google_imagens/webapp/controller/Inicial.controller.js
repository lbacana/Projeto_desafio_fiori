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
                 {
                    url : "https://www.iuf.org/wp-content/uploads/2020/09/Coca-Cola-Header.jpg",
                    thumbnail : "https://rapidapi.usearch.com/api/thumbnail/get?value=1574528931575308325",
                    title : "Coca-Cola - IUF",
                    provider : {
                        name: "iuf",
                    }
                 },
                 {
                    url : "https://productplacementblog.com/wp-content/uploads/2017/12/Diet-Coke-Coca-Cola-Edo-Japan-and-Manchu-Wok-in-Saved-2.jpg",
                    thumbnail : "https://rapidapi.usearch.com/api/thumbnail/get?value=4672777275365406776",
                    title : "Diet Coke, Coca-Cola, Edo Japan And Manchu Wok In Saved! (2004)",
                    provider : {
                        name: "productplacementblog"
                    }
                 },
                 {
                    url : "https://img.yumpu.com/51789413/1/117x151/pepsi-revised-story.jpg?quality=85",
                    thumbnail : "https://rapidapi.usearch.com/api/thumbnail/get?value=580148335407608069",
                    title : "Pepsi Magazines",
                    provider : {
                        name: "yumpu"
                    }
                 }                                     
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
                alert(query);
            }
        });
    });
