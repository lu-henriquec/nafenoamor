import React from 'react';
import domtoimage from 'dom-to-image';
import { jsPDF } from "jspdf";
import { saveAs } from 'file-saver';

import { Container } from './style';

function Downloads() {
  const savePNG = () => {
    const node = document.getElementById('card');

    domtoimage.toBlob(node).then(function (blob) {
      saveAs(blob, 'na-fe-no-amor.png');
    });
  }

  const savePDF = () => {
    const node = document.getElementById('card');

    domtoimage.toPng(node)
    .then(function (dataUrl) {
        let doc = new jsPDF();

        doc.addImage(dataUrl, "PNG", 50, 10);
        doc.save("na-fe-no-amor.pdf");
    });
  }

  return (
    <Container>
      Download: 
      <span onClick={savePNG}>png para web</span>
      <span onClick={savePDF}>pdf para impressão</span>
    </Container>
  );
}

export default Downloads;