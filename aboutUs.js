class Staff{
    constructor(imgSrc, name, role, description){
        this.imgSrc = imgSrc;
        this.name = name;
        this.role = role;
        this.description = description;
    }
}

const staffMembers = [
    new Staff("https://cdn.iz.ru/sites/default/files/styles/420x480/public/tag-2022-06/Putin%201_4.jpg?itok=B-z9pZfY", "Vladimir Putin", "CEO", "Brief Description about the staff member, their experience, and their role in the bakery"),
    new Staff("https://www.gatesfoundation.org/-/media/gfo/3about/3people/ga311881_bill_gates.jpg", "Bill Gates", "COO", "Brief Description about the staff member, their experience, and their role in the bakery"),
    new Staff("https://e3.365dm.com/21/07/2048x1152/skynews-jeff-bezos-amazon_5437859.jpg", "Jeff Bezos", "CMO", "Brief Description about the staff member, their experience, and their role in the bakery"),
    new Staff("https://www.lrt.lt/img/2019/09/17/511710-400802-756x425.jpg", "Edward Snowden", "CTO", "Brief Description about the staff member, their experience, and their role in the bakery"),
    new Staff("https://image.cnbcfm.com/api/v1/image/107083077-1656593419933-gettyimages-1395062617-t_w16437_4934a878-972d-4bea-b6ef-b61f4ceeb787.jpeg?v=1682101376&w=929&h=523&vtcrop=y", "Elon Musk", "CFO", "Brief Description about the staff member, their experience, and their role in the bakery"),
    new Staff("https://cdn.britannica.com/99/236599-050-1199AD2C/Mark-Zuckerberg-2019.jpg", "Mark Zuckerberg", "CIO", "Brief Description about the staff member, their experience, and their role in the bakery"),
    new Staff("https://rg.ru/uploads/images/166/36/70/1.jpg", "Viktor Barinov", "Executive Chef", "Brief Description about the staff member, their experience, and their role in the bakery"),
    new Staff("https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2017_05/1890591/170203-salt-bae-mn-1530.jpg", "Salt Bae", "Chef de Cuisine", "Brief Description about the staff member, their experience, and their role in the bakery"),
    new Staff("https://tengrinews.kz/userdata/news/2021/news_448347/thumb_m/photo_373693.jpeg", "Burak Ozdemir", "Sous Chef", "Brief Description about the staff member, their experience, and their role in the bakery"),
]

function createStaff(){
    const container = document.querySelector('.staff-members-scroll');
    const member = document.getElementById('template');
    staffMembers.forEach(staffMember => {
        const staffm = member.cloneNode(true);
        staffm.id = '';
        staffm.style.display = 'block';
        // Update the content
        staffm.querySelector('.staff-photo').src = staffMember.imgSrc;
        staffm.querySelector('.name').textContent = staffMember.name;
        staffm.querySelector('.role').textContent = staffMember.role;
        staffm.querySelector('.description').textContent = staffMember.description;
        // append
        container.appendChild(staffm);
    });
}

function scroll(){
    const scrollContainer = document.querySelector('.staff-members-scroll');
    const leftButton = document.querySelector('.scroll-button.left');
    const rightButton = document.querySelector('.scroll-button.right');
    const scrollWidth = scrollContainer.lastChild.offsetWidth;
    leftButton.addEventListener('click', function() {
            scrollContainer.scrollLeft -= scrollWidth;
    });
    
    rightButton.addEventListener('click', function() {
            scrollContainer.scrollLeft += scrollWidth;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    createStaff();
    scroll();
});