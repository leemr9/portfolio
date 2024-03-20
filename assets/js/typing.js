const content = "어차피 그 사람이 그 사람입니다.";
const content2 = "더 이상 고민하지 마시고 지금 연락주세요!";

const tit = document.querySelector(".sec6-typing_tit");
const body = document.querySelector(".sec6-typing_body");

let i = 0;

function typing () {
    if (i === 0) {
        tit.textContent = "";
        body.textContent = "";
    }

    if (i < content.length) {
        let txt = content.charAt(i);
        tit.textContent += txt;
        i++;
        setTimeout(typing, 150);
    } else if (i < content.length + content2.length) {
        let txt = content2.charAt(i - content.length);
        body.textContent += txt;
        i++;
        setTimeout(typing, 130);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    typing();
});

window.addEventListener('popstate', function() {
    i = 0;
    typing();
});
