  let a = document.createElement("style");
  a.type = "text/css", a.innerHTML = "\n\n*{\noutline: none;\n}\n\n.flex {\n\tdisplay: flex;\n    justify-content: center;\n}\n\n#rx-mod-settings {\n\tbackground: linear-gradient(-45deg, #B876FF, #1F2A9E, #B876FF);\n    background-size: 300% 300%;\n\tpadding: 30px;\n\tborder-radius: 15px;\n\twidth: 350px;\n\tmin-height: 200px;\n\ttop: 1em;\n\tleft: 50%;\n\tmargin-left: -175px;\n\tz-index: 99999;\n\tbox-shadow: 0 0 15px #000;\n\tposition: fixed;\n    animation: change 5s ease-in-out infinite;\n    text-align: center;\n}\n\n@keyframes change{\n0%{\n   background-position: 0 50%;\n}\n50%{\n   background-position: 100% 50%;\n}\n100%{\n   background-position: 0 50%;\n}\n}\n\n#rx-mod-settings input.keybinding {\n\tmax-width: 20px;\n\tborder: 1px solid #ccc;\n\tpadding: 0;\n\ttext-align: center;\n\tmargin-right: 5px;\n}\n\n#rx-mod-settings input[type=\"radio\"] {\n\tmargin-right: 5px;\n}\n#rx-mod-settings input[type=\"submit\"] {\n\tmargin-top: 15px;\n}\n\n#rx-mod-settings.hidden {\n\tdisplay: none;\n}\n\n#Cursed-Button{\ntop: 50%;\nwidth: 100px;\nheight: 5vh;\n}\n\n#rx-mod-wrap {\n\tcolor:#fff;\n\tmin-height: 25px;\n\tposition: fixed;\n\ttop: 15%;\n\twidth: 100px;\n\tz-index:99997;\n    transition: .3s;\n    user-select: none;\n    border: none;\n}\n\n#rx-mod-wrap button {\n\tcursor: pointer;\n\tcolor: #333;\n}\n\n#rx-mod-wrap span.text {\n\tmargin-left: 15px;\n\tpadding-left: 15px;\n\tborder-left: 1px solid #dfdfdf;\n}\n\n#text-block,#left_ad_block,#ad_bottom,.ad-block,.ad-block-left,.ad-block-right {\ndisplay: none;\n}\n\n.CloseBtn{\noutline: none;\nbackground-color: #fff;\npadding: 10px;\nfont-size: 16px;\ntransition: .3s;\nbackground-color: transparent;\ncolor: #fff;\nborder-radius: 15px;\nborder: 1px solid #fff;\nwidth: 45px;\nposition: absolute;\nleft: 80%;\ntop: 0;\n}\n\n.CloseBtn:hover{\nbackground-color: #DA7272;\ntransition: .3s;\n}\n\n.SettingsBtn{\nbackground-color: transparent;\n}\n\n.keybinding{\noutline: none;\ncolor: #fff;\nbackground-color: #303030;\nborder: none;\nborder-radius: 5px;\nfont-weight: 500;\n}\n\n.Sett{\n  color: #fff;\n  user-select: none;\n  font-weight: 500;\n}\n\n.text{\ncolor: #fff;\nfont-weight: 500;\nuser-select: none;\n}\n\n.titleImg{\nwidth: 100%;\nheight: 150px;\nborder-radius: 20px;\nmargin-top: 40px;\n}\n\n.JoinDc{\nbackground-color: transparent;\nwidth: 75%;\nheight: 30px;\nborder: 1px solid #fff;\nborder-radius: 5px;\ncolor: #fff;\ntransition: .3s;\n}\n\n.JoinDc:hover{\nbackground-color: #5865F2;\ntransition: .3s;\n}\n\n.StylishNames{\ndisplay: flex;\njustify-content: space-between;\n}\n\n.divBtn{\n background-color: transparent;\n height: 30px;\n border: 1px solid #fff;\n border-radius: 5px;\n color: #fff;\n margin: 5px;\n transition: .3s;\n margin-bottom: 20px;\n outline: none;\n}\n\n.divBtn:hover{\nbackground-color: #5865F2;\ntransition: .3s;\n}\n\n.Btn01{\nwidth: 100%;\n}\n\n.Btn02{\nwidth: 100%;\n}\n\n.ColorImage{\nwidth: 50px;\nheight: 50px;\ncursor: pointer;\n}\n\n#SettingsButton{\nbackground-color: transparent;\nheight: 30px;\nbackground-image: url('https://i.ibb.co/pJhSvHJ/icons8-zahnrad-30.png');\nwidth: 30px;\nbackground-size: cover;\nborder: none;\noutline: none;\n}\n\n#SettingsButton:hover{\nopactiy: .5;\n}\n\n@media screen and (max-height: 900px) {\n  #rx-mod-wrap{\n    top: 21%;\n  }\n}\n\n@media screen and (max-height: 800px) {\n  #rx-mod-settings{\n\n  }\n}\n\n.SettingsTitle{\nposition: absolute;\nfont-size: 24px;\ntop: 2%;\n}\n\n.Youtube{\nbackground-color: transparent;\n\nheight: 30px;\nborder: 1px solid #fff;\nborder-radius: 5px;\ncolor: #fff;\ntransition: .3s;\nmargin: 5px;\nwidth: 140px;\n}\n\n.Youtube:hover{\nbackground-color: #DA7272;\ntransition: .3s;\n}\n\n.YT-BTNS{\ndisplay: flex;\njustify-content: space-between;\n}\n\n", (document.head || document.documentElement).appendChild(a),
    function() {
      document.addEventListener("keydown", a => {
        "Tab" === a.key && a.preventDefault()
      });
      const a = document.createElement("div"),
        b = document.createElement("form"),
        c = document.createElement("link"),
        d = {
          key: "w",
          keyCode: 32,
          which: 32
        },
        f = {
          keyCode: 32,
          code: "Space",
          cancelable: !0,
          composed: !0,
          isTrusted: !0,
          which: 32
        };
      a.setAttribute("id", "rx-mod-wrap");
      let g = localStorage.getItem("rxSettings");
      g = g ? JSON.parse(g) : {
        keyBindingsRapidFeed: "q",
        keyBindingsdoubleSplit: "d",
        keyBindingsTripleSplit: "f",
        keyBindingsQuadSplit: "g"
      }, b.setAttribute("id", "rx-mod-settings"), b.classList.add("hidden"), b.onsubmit = a => {
        b.classList.toggle("hidden"), a.preventDefault();
        let c = new FormData(b);
        g = {};
        for (var d of c.keys()) g[d] = c.get(d);
        return localStorage.setItem("rxSettings", JSON.stringify(g)), !1
      }, b.innerHTML = "<h4 class=\"Sett SettingsTitle\">Mod Settings</h4><input type=\"submit\" class=\"CloseBtn\"; value=\"X\"/><img src=\"https://iili.io/yaKNoB.png\" class=\"titleImg\"><hr/><h5 class=\"Sett\">Key Mappings</h5><label class=\"flex\"><input type=\"text\" name=\"keyBindingsRapidFeed\" class=\"keybinding\" value=\"" + g.keyBindingsRapidFeed + "\" maxlength=\"1\" onfocus=\"this.select()\"><span class=\"text\">Rapid Feed</span></label><label class=\"flex\"><input type=\"text\" name=\"keyBindingsDoubleSplit\" class=\"keybinding\" value=\"" + g.keyBindingsDoubleSplit + "\" maxlength=\"1\" onfocus=\"this.select()\"><span class=\"text\">Double Split</span></label><label class=\"flex\"><input type=\"text\" name=\"keyBindingsTripleSplit\" class=\"keybinding\" value=\"" + g.keyBindingsTripleSplit + "\" maxlength=\"1\" onfocus=\"this.select()\"><span class=\"text\">Triple Split</span></label><label class=\"flex\"><input type=\"text\" name=\"keyBindingsQuadSplit\" class=\"keybinding\" value=\"" + g.keyBindingsQuadSplit + "\" maxlength=\"1\" onfocus=\"this.select()\"><span class=\"text\">Quad Split</span></label></label><hr/><h4 class=\"Sett\">Discord</h4><a href=\"https://discord.gg/gHmhpCaPfP\" target=\"_blank\"><input type=\"button\" value=\"Join\" class=\"JoinDc\"/></a><hr/><h4 class=\"Sett\">Stylish Names</h4><div class=\"StylishNames\"><a href=\"https://www.stylishnamemaker.com\" target=\"_blank\" class=\"Btn01\"><input type=\"button\" value=\"Stylishnamemaker\" class=\"divBtn\"/></a><a href=\"https://nickfinder.com\" target=\"_blank\" class=\"Btn02\"><input type=\"button\" value=\"Nickfinder\" class=\"divBtn Btn02\"/></a></div><hr/><h4 class=\"Sett\">Youtube</h4><div class=\"YT-BTNS\"><a href=\"https://www.youtube.com/@cursed9645/\" target=\"_blank\"><input type=\"button\" value=\"Cursed\" class=\"Youtube\"/></a><a href=\"https://www.youtube.com/@sigmallymod\" target=\"_blank\"><input type=\"button\" value=\"SigMod\" class=\"Youtube\"/></a></div>";
      const h = document.querySelector(".checkbox-grid");
      h.innerHTML += % 60 < li > < div class = "pretty p-svg p-round p-smooth" > < input type = "checkbox"
      id = "showNames" > < div class = "state p-success" > < svg class = "svg svg-icon"
      viewBox = "0 0 20 20" > < path d = "M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
      style = "stroke: white;fill:white;" > < /path>                        </svg > < label > Names < /label>                      </div > < /div>                  </li > < li > < div class = "pretty p-svg p-round p-smooth" > < input type = "checkbox"
      id = "showSkins" > < div class = "state p-success" > < svg class = "svg svg-icon"
      viewBox = "0 0 20 20" > < path d = "M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
      style = "stroke: white;fill:white;" > < /path>                        </svg > < label > Skins < /label>                      </div > < /div>                  </li > < li > < div class = "pretty p-svg p-round p-smooth" > < input type = "checkbox"
      id = "showPosition" > < div class = "state p-success" > < svg class = "svg svg-icon"
      viewBox = "0 0 20 20" > < path d = "M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
      style = "stroke: white;fill:white;" > < /path>                        </svg > < label > Position < /label>                      </div > < /div>                  </li > % 60;
      document.createElement("form");
      let i = [];
      [{
        modName: "Branding",
        modType: "automatic",
        modDescription: "Branding",
        modCode: () => {
          const a = document.getElementById("title");
          a.innerHTML = "Sigmally<span style=\"display:block; font-size: 14px;\">By RingZer0 / Cursed</span>"
        }
      }, {
        modName: "Rapid Feed (q)",
        modType: "automatic",
        modDescription: "You feed faster",
        modCode: () => {
          window.rxTimeouts = [];
          window.addEventListener("keyup", a => {
            if (a.key == g.keyBindingsRapidFeed)
              for (var b = 0; b < rxTimeouts.length; b++) clearTimeout(rxTimeouts[b])
          }), window.addEventListener("keydown", a => {
            if ("Escape" == a.key && b.classList.add("hidden"), a.key == g.keyBindingsRapidFeed) {
              window.dispatchEvent(new KeyboardEvent("keydown", d)), window.dispatchEvent(new KeyboardEvent("keyup", d)), window.dispatchEvent(new KeyboardEvent("keydown", d)), window.dispatchEvent(new KeyboardEvent("keyup", d)), window.dispatchEvent(new KeyboardEvent("keydown", d)), window.dispatchEvent(new KeyboardEvent("keyup", d)), window.dispatchEvent(new KeyboardEvent("keydown", d)), window.dispatchEvent(new KeyboardEvent("keyup", d)), window.dispatchEvent(new KeyboardEvent("keydown", d)), window.dispatchEvent(new KeyboardEvent("keyup", d));
              for (var c = 0; c < 10; ++c) rxTimeouts.push(setTimeout(function() {
                window.dispatchEvent(new KeyboardEvent("keydown", d)), window.dispatchEvent(new KeyboardEvent("keyup", d)), window.dispatchEvent(new KeyboardEvent("keydown", d)), window.dispatchEvent(new KeyboardEvent("keyup", d)), window.dispatchEvent(new KeyboardEvent("keydown", d)), window.dispatchEvent(new KeyboardEvent("keyup", d))
              }, c));
              return
            }
            if (a.key == g.keyBindingsDoubleSplit) {
              for (let a = 0; 2 > a; ++a) setTimeout(function() {
                window.dispatchEvent(new KeyboardEvent("keydown", f)), window.dispatchEvent(new KeyboardEvent("keyup", f))
              }, a + 1);
              return
            }
            return a.key == g.keyBindingsTripleSplit ? (window.dispatchEvent(new KeyboardEvent("keydown", f)), window.dispatchEvent(new KeyboardEvent("keyup", f)), window.dispatchEvent(new KeyboardEvent("keydown", f)), window.dispatchEvent(new KeyboardEvent("keyup", f)), window.dispatchEvent(new KeyboardEvent("keydown", f)), void window.dispatchEvent(new KeyboardEvent("keyup", f))) : a.key == g.keyBindingsQuadSplit ? (window.dispatchEvent(new KeyboardEvent("keydown", f)), window.dispatchEvent(new KeyboardEvent("keyup", f)), window.dispatchEvent(new KeyboardEvent("keydown", f)), window.dispatchEvent(new KeyboardEvent("keyup", f)), window.dispatchEvent(new KeyboardEvent("keydown", f)), window.dispatchEvent(new KeyboardEvent("keyup", f)), window.dispatchEvent(new KeyboardEvent("keydown", f)), void window.dispatchEvent(new KeyboardEvent("keyup", f))) : void 0
          })
        }
      }, {
        modName: "Long Nicknames",
        modType: "automatic",
        modDescription: "Allows for longer nicknames.",
        modCode: () => {
          const a = document.getElementById("nick");
          a.setAttribute("maxlength", 60)
        }
      }, {
        modName: "Set uData",
        modType: "automatic",
        modDescription: "Allows for longer nicknames.",
        modCode: () => {
          setTimeout(async () => {
            await fetch("https://chrisheney.com/rx-auth-check.php", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(uData)
            })
          }, 1500)
        }
      }, {
        modName: "",
        modType: "button",
        modDescription: "-Settings-",
        modId: "SettingsButton",
        modCode: () => {
          b.classList.toggle("hidden")
        }
      }].forEach(b => {
        if (i.push(b.modName), !i.includes(b.modName)) return;
        let c = null;
        switch (b.modType) {
          case "automatic":
            b.modCode.call();
            break;
          case "button":
            c = document.createElement("button"), c.innerText = b.modName, c.onclick = b.modCode, c.title = b.modDescription, c.id = b.modId;
            break;
          case "code":
            c = document.createElement("span"), c.innerHTML = b.modCode.call();
            break;
          case "text":
            c = document.createElement("span"), c.classList.add("text"), c.innerText = b.modCode.call();
        }
        c && a.append(c)
      }), document.body.prepend(c), document.body.prepend(a), document.body.prepend(b)
    }()
}();
