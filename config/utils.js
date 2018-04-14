const fs = require('fs');
const path = require('path');

//
// import countries names
const countriesNames = require('../data/countries');

//
// generate the data structure for places/albums/photos that the app uses
// for the main navigation in the gallery section
const allFilesSync = (dir, firstLevel = false, fileList = []) => {
    fs.readdirSync(dir).forEach((file, index) => {
        const filePath = path.join(dir, file);

        if (file[0] !== '.') { // ignore hidden items
            if (fs.statSync(filePath).isDirectory()) {
                if (firstLevel) {
                    fileList.push({
                        'index': index - 1,
                        'link': file,
                        'name': countriesNames[file],
                        'albums': allFilesSync(filePath, false)
                    });
                }
                else {
                    fileList.push({
                        'index': index - 1,
                        'link': file,
                        'name': countriesNames[file],
                        'photos': allFilesSync(filePath, false)
                    });
                }
            }
            else {
                if (firstLevel) {
                    fileList.push(file);
                }
                else {
                    fileList.push(filePath.substr(
                        filePath.indexOf('/photos'), filePath.length
                        )
                    );
                }
            }
        }
    });
    return fileList
};

module.exports = {
    //
    // get profile, only two profiles are supported for now
    getDataProfile: () => {
        return ['armando', 'melisa'].includes(process.argv[2]) ? process.argv[2] : 'armando';
    },
    //
    // get theme, this function define which global colors scheme the app will use
    // default: BigStone theme
    getTheme: theme => {
        return ['BigStone', 'ClamShell', 'OldTimes'].includes(theme) ? theme : 'BigStone';
    },
    //
    // get profile image string in base64
    getProfileImage: imagePath => {
        //
        // read binary data and return base64
        return fs.readFileSync(imagePath, 'base64');
    },
    allFilesSync: allFilesSync
};