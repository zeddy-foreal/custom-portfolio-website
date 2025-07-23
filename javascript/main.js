        let ranges = document.querySelectorAll(".skills .skill span");
        let sections = document.querySelectorAll(".sec")
        ranges.forEach((span)=>{
        span.style.width = span.parentElement.getAttribute("data-value")
        })


        const observer = new IntersectionObserver((arr)=>{arr.forEach((elem)=>{
            if(elem.isIntersecting){
                elem.target.style.opacity =1;
            }
        })}, {threshold:0.3});



        sections.forEach((elem)=>{
            observer.observe(elem)
        })