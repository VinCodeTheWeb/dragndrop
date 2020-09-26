const onDragStart = (event) => {
  event
    .dataTransfer
    .setData('text', event.target.id);
  
  event
    .currentTarget
    .style
    .background = 'yellow';
};

const onDragOver = (event) => event.preventDefault();

const onDrop = (event) => {
  const id = event.dataTransfer.getData('text');

  const draggableElement = document.getElementById(id);

  const dropzone = event.target;
  dropzone.appendChild(draggableElement);

  event.dataTransfer.clearData();
};
