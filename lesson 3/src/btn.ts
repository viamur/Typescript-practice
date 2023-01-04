const btnRef = document.querySelector('button') as HTMLButtonElement;

btnRef.addEventListener('click', onClickBtn);

function onClickBtn(): void {
  console.log('ClickBtn');
}
