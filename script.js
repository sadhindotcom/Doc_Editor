const boldBtn = document.querySelector('#bold-btn')
const italicBtn = document.querySelector('#italic-btn')
const underlineBtn = document.querySelector('#underline-btn')
const colorBtn = document.querySelector('#color-btn')
const newBtn = document.querySelector('#new-btn')
const txtBtn = document.querySelector('#txt-btn')
const pdfBtn = document.querySelector('#pdf-btn')
const content = document.querySelector('#content')
const fileName = document.querySelector('#input')

boldBtn.addEventListener('click', () => {
    document.execCommand('bold')
})
italicBtn.addEventListener('click', () => {
    document.execCommand('italic')
})
underlineBtn.addEventListener('click', () => {
    document.execCommand('underline')
})
colorBtn.addEventListener('input', () => {
    document.execCommand('foreColor', false, colorBtn.value)
})
newBtn.addEventListener('click', () => {
    content.innerHTML = ""
})
txtBtn.addEventListener('click', () => {
    const a = document.createElement('a')
    const blob = new Blob([content.innerText])
    const dataUrl = URL.createObjectURL(blob)
    a.href = dataUrl
    a.download = fileName.value + ".txt"
    a.click()
})
pdfBtn.addEventListener('click', () => {
    html2pdf().from(content).save(fileName.value)
})