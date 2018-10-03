onload = function() {
    var click_cnt = 0;
    var $html = document.getElementsByTagName("html")[0];
    var $body = document.getElementsByTagName("body")[0];
    $html.onclick = function(e) {
        var $elem = document.createElement("b");
        $elem.style.color = "#E94F06";
        $elem.style.zIndex = 9999;
        $elem.style.position = "absolute";
        $elem.style.select = "none";
        var x = e.pageX;
        var y = e.pageY;
        $elem.style.left = (x - 10) + "px";
        $elem.style.top = (y - 20) + "px";
        clearInterval(anim);
		var tot_rd = 60;
        switch (++click_cnt) {
			case 1:
				$elem.innerHTML = "This";
				break;
			case 2:
				$elem.innerHTML = "is";
				break;
			case 3:
				$elem.innerHTML = "Kewth's";
				break;
			case 4:
				$elem.innerHTML = "Bolg!!!";
				break;
            case 5:
                $elem.innerText = "OωO";
				click_cnt = Math.random() * tot_rd;
                break;
            case 10:
                $elem.innerText = "(๑•́ ∀ •̀๑)";
				click_cnt = Math.random() * tot_rd;
                break;
            case 15:
                $elem.innerText = "(๑•́ ₃ •̀๑)";
				click_cnt = Math.random() * tot_rd;
                break;
            case 20:
                $elem.innerText = "(๑•̀_•́๑)";
				click_cnt = Math.random() * tot_rd;
                break;
            case 25:
                $elem.innerText = "（￣へ￣）";
				click_cnt = Math.random() * tot_rd;
                break;
            case 30:
                $elem.innerText = "(╯°口°)╯(┴—┴";
				click_cnt = Math.random() * tot_rd;
                break;
            case 35:
                $elem.innerText = "૮( ᵒ̌皿ᵒ̌ )ა";
				click_cnt = Math.random() * tot_rd;
                break;
            case 40:
                $elem.innerText = "╮(｡>口<｡)╭";
				click_cnt = Math.random() * tot_rd;
                break;
            case 45:
                $elem.innerText = "( ง ᵒ̌皿ᵒ̌)ง⁼³₌₃";
				click_cnt = Math.random() * tot_rd;
                break;
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
                $elem.innerText = "(ꐦ°᷄д°᷅)";
                break;
            default:
				if(click_cnt >= tot_rd)
				{	
					click_cnt = 0;
					$elem.innerText = "❤❤❤";
				}
			else
                $elem.innerText = "❤x" + Math.floor(click_cnt);
                break;
        }
		click_cnt = Math.floor(click_cnt);
        $elem.style.fontSize = Math.random() * 18 + 6 + "px";
        var increase = 0;
        var anim;
        setTimeout(function() {
            anim = setInterval(function() {
                if (++increase == 150) {
                    clearInterval(anim);
                    $body.removeChild($elem);
                }
                $elem.style.top = y - 20 - increase + "px";
                $elem.style.opacity = (150 - increase) / 120;
            }, 8);
        }, 70);
        $body.appendChild($elem);
    };
};
