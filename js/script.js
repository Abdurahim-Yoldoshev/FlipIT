const objects ={
    loaded: document.getElementById('loaded'),
    home: document.getElementById('home'),
    homeBtn: document.getElementById('homeBtn'),
    aboutBtn: document.getElementById('aboutBtn'),
    about: document.getElementById('about'),
    blogBtn: document.getElementById('blogBtn'),
    blog: document.getElementById('blog'),
    portBtn: document.getElementById('portBtn'),
    portfolia: document.getElementById('portfolia'),
    contactBtn: document.getElementById('contactBtn'),
    contact: document.getElementById('contact')  
}

objects.homeBtn.addEventListener('click',()=>{
    objects.about.style.display = 'none';
    objects.blog.style.display = 'none';
    objects.portfolia.style.display = 'none';
    objects.contact.style.display = 'none';
    objects.home.style.display = 'none';
    objects.loaded.style.display = 'flex';
    objects.homeBtn.style.color = '#da4612';
    objects.aboutBtn.style.color = '#f1f1f1';
    objects.blogBtn.style.color = '#f1f1f1';
    objects.portBtn.style.color = '#f1f1f1';
    objects.contactBtn.style.color ='#f1f1f1';
    setTimeout(()=>{
        objects.loaded.style.opacity = 0;
        setTimeout(()=>{
            objects.loaded.style.display = 'none';
            objects.home.style.display = 'block';
            objects.loaded.style.opacity = 1;
        },100)
    },1000)
}
)

objects.aboutBtn.addEventListener('click',()=>{
    objects.blog.style.display = 'none';
    objects.portfolia.style.display = 'none';
    objects.contact.style.display = 'none';
    objects.about.style.display = 'none';
    objects.home.style.display = 'none';
    objects.loaded.style.display = 'flex';
    objects.homeBtn.style.color = '#f1f1f1';
    objects.aboutBtn.style.color = '#da4612';
    objects.blogBtn.style.color = '#f1f1f1';
    objects.portBtn.style.color = '#f1f1f1';
    objects.contactBtn.style.color ='#f1f1f1';
    setTimeout(()=>{
        objects.loaded.style.opacity = 0;
        setTimeout(()=>{
            objects.loaded.style.display = 'none';
            objects.loaded.style.opacity = 1;
            objects.about.style.display = 'block';
        },100)
    },1000)
}
)

objects.blogBtn.addEventListener('click',()=>{
    objects.portfolia.style.display = 'none';
    objects.contact.style.display = 'none';
    objects.home.style.display = 'none';
    objects.about.style.display = 'none';
    objects.blog.style.display = 'none';
    objects.loaded.style.display = 'flex';
    objects.homeBtn.style.color = '#f1f1f1';
    objects.aboutBtn.style.color = '#f1f1f1';
    objects.blogBtn.style.color = '#da4612';
    objects.portBtn.style.color = '#f1f1f1';
    objects.contactBtn.style.color ='#f1f1f1';
    setTimeout(()=>{
        objects.loaded.style.opacity = 0;
        setTimeout(()=>{
            objects.loaded.style.display = 'none';
            objects.loaded.style.opacity = 1;
            objects.blog.style.display = 'block';
        },100)
    },1000)
}
)

objects.portBtn.addEventListener('click',()=>{
    objects.contact.style.display = 'none';
    objects.portfolia.style.display = 'none';
    objects.about.style.display = 'none';
    objects.home.style.display = 'none';
    objects.blog.style.display = 'none';
    objects.loaded.style.display = 'flex';
    objects.homeBtn.style.color = '#f1f1f1';
    objects.aboutBtn.style.color = '#f1f1f1';
    objects.blogBtn.style.color = '#f1f1f1';
    objects.portBtn.style.color = '#da4612';
    objects.contactBtn.style.color ='#f1f1f1';
    setTimeout(()=>{
        objects.loaded.style.opacity = 0;
        setTimeout(()=>{
            objects.loaded.style.display = 'none';
            objects.loaded.style.opacity = 1;
            objects.portfolia.style.display = 'block';
        },100)
    },1000)
}
)

objects.contactBtn.addEventListener('click',()=>{
    objects.about.style.display = 'none';
    objects.blog.style.display = 'none';
    objects.portfolia.style.display = 'none';
    objects.home.style.display = 'none';
    objects.contact.style.display = 'none';
    objects.loaded.style.display = 'flex';
    objects.homeBtn.style.color = '#f1f1f1';
    objects.aboutBtn.style.color = '#f1f1f1';
    objects.blogBtn.style.color = '#f1f1f1';
    objects.portBtn.style.color = '#f1f1f1';
    objects.contactBtn.style.color ='#f1f1f1';
    setTimeout(()=>{
        objects.loaded.style.opacity = 0;
        setTimeout(()=>{
            objects.loaded.style.display = 'none';
            objects.loaded.style.opacity = 1;
            objects.contact.style.display = 'block';
        },100)
    },1000)
}
)


// hello