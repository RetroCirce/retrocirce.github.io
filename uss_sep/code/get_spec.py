import matplotlib.pyplot as plt
import librosa.display

import numpy as np
import os
import librosa


l_folder = "D:/Research/personal_website/retrocirce.github.io/uss_sep/files/harry_potter/"
subfolders = [f for f in os.listdir(l_folder) if os.path.isdir(os.path.join(l_folder, f))]
for folder in subfolders:
    files = [f for f in os.listdir(os.path.join(l_folder, folder)) if f.endswith('.wav')]
    for f in files:
        filename = os.path.join(l_folder, folder, f)
        y, sr = librosa.load(filename, sr=None)

        window_size = 1024
        window = np.hanning(window_size)
        stft  = librosa.core.spectrum.stft(y, n_fft=window_size, hop_length=512, window=window)
        out = 2 * np.abs(stft) / np.sum(window)

        # For plotting headlessly
        from matplotlib.backends.backend_agg import FigureCanvasAgg as FigureCanvas

        fig = plt.Figure()
        canvas = FigureCanvas(fig)
        ax = fig.add_subplot(111)
        p = librosa.display.specshow(librosa.amplitude_to_db(out, ref=np.max), ax=ax, y_axis='linear', x_axis='time')
        fig.tight_layout()
        fig.savefig(os.path.join(l_folder, folder, f.split(".")[0] + '.png'))