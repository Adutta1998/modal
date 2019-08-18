function Modal() {

    Modal.prototype.openModal = function(id){
        var modal = document.querySelector('#'+id);
        modal.classList.add('active');
    }
    Modal.prototype.closeModal = function(id,params){
        var modal = document.querySelector('#'+id);
        if(params.path[0] == modal){
            modal.classList.remove('active');
        }
    }
    Modal.prototype.content=function(n,el){
        var elem = elems[n-1];
        if(el.title){
            elem.getElementsByClassName('mbody')[0].getElementsByClassName('title')[0].innerHTML= el.title
        }
        if(el.html){
            elem.getElementsByClassName('mbody')[0].getElementsByClassName('desc')[0].innerHTML= el.html
        }
        if(el.size){
            elem.getElementsByClassName('mbody')[0].style.width=el.size.x+"px";
            elem.getElementsByClassName('mbody')[0].style.height=el.size.y+"px";
        }
        if(el.bgcolor){
            elem.getElementsByClassName('mbody')[0].style.backgroundColor=el.bgcolor;
        }
        console.log(elem,el);
        
    }
    
    
    var triggers = document.querySelectorAll('.modal-trigger');
    var elems = document.querySelectorAll('.modal');
    // console.log(triggers[0].getAttribute('data-target'));
    for(let i=0;i<triggers.length;i++){
        triggers[i].addEventListener('click',function(){
            Modal.prototype.openModal(triggers[i].getAttribute('data-target'));
            elems[i].addEventListener('click',function(params){
                Modal.prototype.closeModal(triggers[i].getAttribute('data-target'),params)
            })
        });
    }


    console.log(elems,triggers);
}
