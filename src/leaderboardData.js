// model_name:{task1:{instance1:Score, instance2:score}, 
//            task2:{instance1:score, instance2:score}...} 

const raw_data = {
  'BERT-GSLM': {
    'SpeechDetection': {
      'LJSpeech': 99.66,
      'LibriSpeech-TestClean': 97.48,
      'LibriSpeech-TestOther': 77.57,
    },
    'SpeechTextMatching': {
      'LJSpeech': 54.11,
      'LibriSpeech-TestClean': 57.82,
      'LibriSpeech-TestOther': 54.02,
    },
    'SpokenTermDetection': {
      'LJSpeech': 52.60,
      'LibriSpeech-TestClean': 51.45,
      'LibriSpeech-TestOther': 52.36,
    },
    'EnhancementDetection': {
      'LibriTTS-TestClean_WHAM': 74.26
    },
    'NoiseDetection': {
      'LJSpeech_MUSAN-Gaussain': 83.17,
      'VCTK-MUSAN-Gaussain': 90.98,
    },
    'NoiseSNRLevelPrediction': {
      'VCTK_MUSAN-Gaussian': 46.41
    },
    'ReverberationDetection': {
      'LJSpeech_RirsNoises-SmallRoom': 58.61,
      'VCTK_RirsNoises-SmallRoom': 55.92
    },
    'DialogueEmotionClassification': {
      'DailyTalk': 79.70
    },
    'EmotionRecognition': {
      'MultimodalEmotionlinesDataset': 0.00
    },
    'SpoofDetection': {
      'ASVspoof2015': 88.65,
      'ASVspoof2017': 42.57
    },
    'DialogueActClassification': {
      'DailyTalk': 45.65
    },
    'DialogueActPairing': {
      'DailyTalk': 48.60
    },
    'SpeakerCounting': {
      'LibriTTS-TestClean': 55.45
    },
    'SpeakerVerification': {
      'LibriSpeech-TestClean': 37.25,
      'VCTK': 42.36
    }
  },
  'Whisper': {

  },
  'ImageBind-LLM': {

  },
  'Whisper-LLM': {

  },
  'ASR-ChatGPT': {

  }
}

const cloumn_fields = ['Model Name',
  'BirdSoundDetection',
  'ChordClassification',
  'EnvironmentalSoundClassification',
  'SpeechDetection',
  'SpeechTextMatching',
  'SpokenTermDetection',
  'SpeechCommandRecognition',
  'LanguageIdentification',
  'EnhancementDetection',
  'NoiseDetection',
  'NoiseSNRLevelPrediction',
  'ReverberationDetection',
  'AccentClassification',
  'DialogueEmotionClassification',
  'EmotionRecognition',
  'HowFarAreYou',
  'StressDetection',
  'SpoofDetection',
  'DialogueActClassification',
  'IntentClassification',
  'SarcasmDetection',
  'DialogueActPairing',
  'SpeakerCounting',
  'SpeakerVerification',
  'MultiSpeakerDetection'
];


// Generate columns based on the data
// field is the 'key' that is used to access the data in the rows
const columns = [];
for (const field of cloumn_fields) {
  const column = { field: field, width: 150, headerAlign: 'center', align: 'center', headerClassName: 'data-grid-header' };
  columns.push(column);
}


// Generate rows based on the data
const rows = [];
let idCounter = 1;
for (const model in raw_data) {
  const row = { 'id': idCounter, 'Model Name': model };
  for (const task in raw_data[model]) {
    // Take the average of the scores for each instance under each task
    const instances = Object.keys(raw_data[model][task]);
    let sum = 0;
    for (const instance of instances) {
      sum += raw_data[model][task][instance];
    }
    // round to 2 decimal places
    let score = 0;
    score = Math.round((sum / instances.length) * 100) / 100;
    row[task] = score;
  }
  rows.push(row);
  idCounter++;
}

export { columns, rows };