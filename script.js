function show_code(){
    const modal = document.getElementById('janela_modal')
    modal.classList.add('open')

    modal.addEventListener('click', (e) =>{
        if(e.target.id == 'close' ||e.target.id == 'janela_modal'){
            modal.classList.remove('open')
        }
    })
}