// export и export default -
// это ключевые слова в JavaScript, 
// используемые для экспорта переменных, функций, классов и других объектов из модулей, 
// чтобы они могли быть импортированы в других модулях.

export const test = () => {
  
// export используется для явного экспорта одной или нескольких переменных, функций или классов из модуля
  const btn = document.querySelector('button');

  btn.addEventListener('click', () => {
    alert('200')
  })
}

export default test;

// export default также используется для экспорта, но в отличие от export, 
// он экспортирует только один объект по умолчанию из модуля. 
// Этот объект может быть функцией, классом, переменной или любым другим выражением. 
// Каждый модуль может иметь только один экспорт по умолчанию.
