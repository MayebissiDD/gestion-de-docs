import { useState, useEffect } from 'react';
import { FaFileAlt, FaFileWord, FaFileExcel, FaFilePdf, FaImage, FaFolder, FaArchive, FaClipboardList } from 'react-icons/fa';

const DashboardStats = () => {
  const [totalDocs, setTotalDocs] = useState(0);
  const [wordDocs, setWordDocs] = useState(0);
  const [excelDocs, setExcelDocs] = useState(0);
  const [pdfDocs, setPdfDocs] = useState(0);
  const [imageDocs, setImageDocs] = useState(0);
  const [otherDocs, setOtherDocs] = useState(0);
  const [folders, setFolders] = useState(0);
  const [inProgress, setInProgress] = useState(0);
  const [archived, setArchived] = useState(0);

  // Effet de comptage pour rendre l'affichage dynamique
  useEffect(() => {
    const count = (setValue, endValue) => {
      let startValue = 0;
      const increment = Math.ceil(endValue / 50);
      const interval = setInterval(() => {
        startValue += increment;
        if (startValue >= endValue) {
          setValue(endValue);
          clearInterval(interval);
        } else {
          setValue(startValue);
        }
      }, 30);
    };

    count(setTotalDocs, 1250);
    count(setWordDocs, 200);
    count(setExcelDocs, 150);
    count(setPdfDocs, 400);
    count(setImageDocs, 100);
    count(setOtherDocs, 50);
    count(setFolders, 300);
    count(setInProgress, 340);
    count(setArchived, 150);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-2">
      {/* Ligne 1 */}
      {/* Case 1: Total des Documents */}
      <div className="bg-blue-500 text-white p-4 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
        <div className="flex flex-col items-center">
          <FaFolder className="text-5xl mb-2" />
          <h3 className="text-md font-bold">Total des Dossiers</h3>
          <p className="text-4xl font-extrabold mt-2">{folders}</p>
          {/* <FaClipboardList className="text-5xl mb-2" /> */}
          <h3 className="text-md font-bold">Total des Documents</h3>
          <p className="text-4xl font-extrabold mt-2">{totalDocs}</p>
        </div>
      </div>

      {/* Case 2: Total des Dossiers */}

      <div className="bg-red-500 text-white p-4 rounded-lg shadow-lg hover:bg-red-600 transition duration-300">
        <div className="flex flex-col items-center">
        <FaArchive className="text-5xl mb-2" />
          <h3 className="text-md font-bold">Détails Archivé</h3>
          <p className="text-4xl font-extrabold mt-2">{archived}</p>
          <h3 className="text-md font-bold">Détails En cours</h3>
          <p className="text-4xl font-extrabold mt-2">{inProgress}</p>
        </div>
      </div>

      {/* Ligne 2 */}
      {/* Case 4: Total par type de document */}
      <div className="bg-green-500 text-white p-4 rounded-lg shadow-lg hover:bg-green-600 transition duration-300">
        <div className="flex flex-col items-center">
          <FaFileAlt className="text-5xl mb-2" />
          <h3 className="text-md font-bold">Documents par Type</h3>
          <ul className="mt-2 space-y-1 text-center">
            <li className="flex items-center justify-between text-md">
              <FaFileWord className="text-2xl mr-2" /> <strong>Word :</strong> <span>{wordDocs}</span>
            </li>
            <li className="flex items-center justify-between text-md">
              <FaFileExcel className="text-2xl mr-2" /> <strong>Excel :</strong> <span>{excelDocs}</span>
            </li>
            <li className="flex items-center justify-between text-md">
              <FaFilePdf className="text-2xl mr-2" /> <strong>PDF :</strong> <span>{pdfDocs}</span>
            </li>
            <li className="flex items-center justify-between text-md">
              <FaImage className="text-2xl mr-2" /> <strong>IMG :</strong> <span>{imageDocs}</span> 
            </li>
            <li className="flex items-center justify-between text-md">
              <FaFileAlt className="text-2xl mr-2" /> <strong>Autres :</strong> <span>{otherDocs}</span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default DashboardStats;
