let containerQuestions = document.querySelectorAll('.containerQuestion');
let subtitles = document.querySelectorAll('.subtitle');
let paragraphs = document.querySelectorAll('.paragraph');
containerQuestions = Array.from(containerQuestions);
subtitles = Array.from(subtitles);
paragraphs = Array.from(paragraphs);

containerQuestions.forEach((containerItem, indexClickItem) => {
  containerItem.addEventListener('click', function() {
    showParagraphs(indexClickItem);
    shownIconMinus(indexClickItem);
  })
})

function showParagraphs(indexClickItem) {
  const activeParagraph = 'activeParagraph';
  const disabledParagraph = 'disabledParagraph';
  paragraphs.forEach((item, index) => {
    if (index == indexClickItem) {
      if (!item.classList.contains(activeParagraph)) {
        item.classList.add(activeParagraph);
      } else {
        item.classList.remove(activeParagraph);
      }
      item.classList.remove(disabledParagraph);
    } else {
      item.classList.remove(activeParagraph);
      item.classList.add(disabledParagraph);
    }
  })
}

function removeParagraphs() {
  paragraphs.forEach((item) => {
      item.classList.remove('activeParagraph');

  })
}

function shownIconMinus(indexClickItem) {
  const classActive = 'active';
  subtitles.forEach((item, index) => {
    if (indexClickItem == index) {
      if (!item.classList.contains(classActive)) {
        item.classList.add(classActive);
      } else {
        item.classList.remove(classActive);
      }
    } else {
      item.classList.remove(classActive);
    }
  })
}

showParagraphs(0);
shownIconMinus(0);