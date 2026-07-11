// Smooth reveal on scroll and simple nav toggle + form handler
(function(){
  'use strict'
  const revealEls = document.querySelectorAll('.reveal')
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting) e.target.classList.add('visible')
    })
  },{threshold:0.08})
  revealEls.forEach(el=>io.observe(el))

  // nav toggle
  const navToggle = document.getElementById('navToggle')
  const navLinks = document.getElementById('navLinks')
  if(navToggle){
    navToggle.addEventListener('click',()=>{
      navLinks.classList.toggle('show')
      navToggle.classList.toggle('open')
    })
  }

  // close mobile nav on link click
  document.querySelectorAll('#navLinks a').forEach(a=>a.addEventListener('click',()=>{
    if(navLinks.classList.contains('show')){
      navLinks.classList.remove('show')
      navToggle.classList.remove('open')
    }
  }))

  // smooth scrolling fallback for older browsers
  document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click',function(e){
      const href = this.getAttribute('href')
      if(href.length>1 && document.querySelector(href)){
        e.preventDefault()
        document.querySelector(href).scrollIntoView({behavior:'smooth'})
      }
    })
  })

  // contact form basic handler (no backend)
  const form = document.getElementById('contactForm')
  if(form){
    form.addEventListener('submit',e=>{
      e.preventDefault()
      const name = form.name.value.trim()
      const email = form.email.value.trim()
      const message = form.message.value.trim()
      if(!name||!email||!message){
        alert('Please fill all fields')
        return
      }
      // Try to open user's mail client with a prefilled message (mailto fallback)
      try{
        const subject = encodeURIComponent('Portfolio Contact from '+name)
        const body = encodeURIComponent('Name: '+name+"\nEmail: "+email+"\n\nMessage:\n"+message)
        window.location.href = `mailto:pandeyajay2448@gmail.com?subject=${subject}&body=${body}`
      }catch(err){
        alert('Thanks '+name+"! Your message has been recorded. I'll reply to "+email+" soon.")
      }
      form.reset()
    })
  }
})();
