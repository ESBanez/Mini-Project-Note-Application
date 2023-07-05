const addNoteButton = document.getElementById('add-note-btn');
const stickyNotesContainer = document.querySelector('.sticky-notes-container');

addNoteButton.addEventListener('click', addStickyNote);

function addStickyNote() {
  const stickyNote = createStickyNote();
  stickyNotesContainer.appendChild(stickyNote);
}

function createStickyNote() {
  const stickyNote = document.createElement('div');
  stickyNote.className = 'sticky-note';

  const contentTextarea = document.createElement('textarea');
  contentTextarea.className = 'sticky-note-content';
  stickyNote.appendChild(contentTextarea);

  const removeButton = document.createElement('span');
  removeButton.className = 'sticky-note-remove';
  removeButton.textContent = 'x';
  removeButton.addEventListener('click', function() {
    stickyNote.remove();
  });
  stickyNote.appendChild(removeButton);

  return stickyNote;
}