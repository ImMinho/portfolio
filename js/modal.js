function _createModal(options){
    const modal = document.createElement('div');
    modal.classList.add('main-modal');
    modal.insertAdjacentHTML('afterbegin',`
    <form action="#" enctype="multipart/form-data">
        <div class="modal-bg" data-close="true">
            <div class="modal-window">
                <div class="modal-header">
                    <p class="modal-title">ಠ_ಠ How can i help you?</p>
                </div>
                <div class="modal-content">
                    <div class="modal-body">
                        <label class="form__label"></label>
                        <input class="email" type="email" name="email" placeholder="Your email" required>
                        <input class="name" type="name" name="name" placeholder="Your name" required>
                        <label class="form__label"></label>
                        <textarea class="text" type="text" name="text" id="#" placeholder="Message" required></textarea>
                    </div>
                    <div class="modal-footer">
                    <button class="cancel-btn" type="cancel" data-close="true">CANCEL</button>
                    <button class="send-btn" type="submit">SEND</button>
                    </div>
                </div>
            </div>
        </div>
    </form>
    `)
  document.body.appendChild(modal)
  return modal
}

$.modal = function(options){
    const animateModal = 200;
    const $modal = _createModal(options);
    let closing = false;
    const modal = {
        open(){
            !closing && $modal.classList.add('open');
            document.body.style.overflowY = 'hidden';
        },
        close(){
            closing = true;
            $modal.classList.remove('open');
            $modal.classList.add('hidden');
            document.body.style.overflowY = '';
            setTimeout(() =>{
                $modal.classList.remove('hidden');
                closing = false
            }, animateModal)
        }
    }
    $modal.addEventListener('click', event =>{
        console.log("clicked", event.target.dataset.close)
        if(event.target.dataset.close){
            modal.close()
        }
    })
    return modal
}

