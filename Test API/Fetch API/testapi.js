//fetch ảnh
async function test() {
    var res = await fetch('https://lovehands.vn/wp-content/uploads/2020/07/projects-04.jpg', {
            method: 'GET'
        })
        .then((response) => {
            console.log(response);
            if (!response.ok) {
                console.log("Mã lỗi: ", response.status);
                // throw Error(response.statusText);
            }
            return response;
        })
        .catch((error) => {
            return error;
        });
        document.getElementById("hello").src = res.url;
}
test();
//k được gán document.getElementById("hello").src = test().url; vì bất đồng bộ nên bên ngoài thực hiện luôn 
//tức là gán luôn dù chưa fetch xong nên sẽ undefined

async function test1() {
    var res = await fetch('https://lovehands.vn/le-xa-toi-vong-nhan-thang-7-am-lich/', {
            method: 'GET'
        })
        .then((response) => {
            console.log(response);
            if (!response.ok) {
                console.log("Mã lỗi: ", response.status);
                // throw Error(response.statusText);
            }
            return response;
        })
        .catch((error) => {
            return error;
        });
        console.log(res.json());
}
test1();
//nó trả ra web thì là html, kp json nên k dùng json() đc

function reqListener () {
    console.log(this);
}
var xhr = new XMLHttpRequest();
xhr.addEventListener("load", reqListener);
function formv3(){
    // Create the new request 
    var url = 'https://forms.hubspot.com/collected-forms/submit/form'
    
    // Example request JSON:
    var data = {
        contactFields: {email: "hieucuopbien123@gmail.com"},
        formSelectorClasses: ".comment-form",
        formSelectorId: "#commentform",
        formValues: {"Lưu tên của tôi, email, và trang web trong trình duyệt này cho lần bình luận kế tiếp của tôi.": "Not Checked", "Nhận xét của bạn": "HELLLOOOOOOOOOOOOOOOOOOOOOOOOOlll", "Tên": "Nguyễn Thụ Hiếu","Đánh giá của bạn": "Rất tốt"},
        labelToNameMap: {"Lưu tên của tôi, email, và trang web trong trình duyệt này cho lần bình luận kế tiếp của tôi.": "wp-comment-cookies-consent", "Nhận xét của bạn": "comment","Tên": "author","Đánh giá của bạn": "rating"},
        pageTitle: "Nho đỏ Crimson - Úc - CaviFood",
        pageUrl: "https://cavifood.vn/san-pham/buoi-da-xanh-ben-tre/",
        portalId: 19630399,
        type: "SCRAPED",
        utk: "565e7335bc897be9a011ae4b956323a2",
        uuid: "992ab426-8c97-40ee-96de-9301844dcae0",
        version: "collected-forms-embed-js-static-1.243",
    }

    var final_data = JSON.stringify(data)

    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200) { 
            alert(xhr.responseText); // Returns a 200 response if the submission is successful.
        } else if (xhr.readyState == 4 && xhr.status == 400){ 
            alert(xhr.responseText); // Returns a 400 error the submission is rejected.          
        } else if (xhr.readyState == 4 && xhr.status == 403){ 
            alert(xhr.responseText); // Returns a 403 error if the portal isn't allowed to post submissions.           
        } else if (xhr.readyState == 4 && xhr.status == 404){ 
            alert(xhr.responseText); //Returns a 404 error if the formGuid isn't found     
        }
    }


    // Sends the request 
    xhr.send(final_data)
}
formv3();

