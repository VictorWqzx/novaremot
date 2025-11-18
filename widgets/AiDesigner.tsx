
import React, { useState, useRef } from 'react';
import { GoogleGenAI, Modality } from "@google/genai";
import { Button } from '../shared/ui/Button';
import { Upload, Wand2, Image as ImageIcon, Loader2, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const AiDesigner: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        setGeneratedImage(null);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = async () => {
    if (!selectedImage || !prompt) return;

    setLoading(true);
    setError(null);

    try {
      // In a real scenario, process.env.API_KEY is injected by the environment.
      // Since we cannot ask for it in the UI, we assume it is present.
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      // Extract base64 data
      const base64Data = selectedImage.split(',')[1];
      const mimeType = selectedImage.split(';')[0].split(':')[1];

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            {
              inlineData: {
                data: base64Data,
                mimeType: mimeType,
              },
            },
            {
              text: prompt,
            },
          ],
        },
        config: {
          responseModalities: [Modality.IMAGE],
        },
      });

      if (response.candidates?.[0]?.content?.parts) {
        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            const base64ImageBytes: string = part.inlineData.data;
            const imageUrl = `data:image/png;base64,${base64ImageBytes}`;
            setGeneratedImage(imageUrl);
            break; 
          }
        }
      } else {
         throw new Error("No image generated");
      }
    } catch (err) {
      console.error("AI Generation Error:", err);
      setError("Не удалось сгенерировать изображение. Попробуйте другой запрос или проверьте API ключ.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-designer" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-primary-900 opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-sm font-bold mb-4">
            <Wand2 className="w-4 h-4 mr-2" />
            Powered by Gemini 2.5 Flash
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            AI-Дизайнер Интерьера
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Загрузите фото вашей комнаты, опишите идею, и искусственный интеллект покажет, как может выглядеть ваш ремонт.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Control Panel */}
          <div className="bg-slate-800/50 backdrop-blur-md p-8 rounded-3xl border border-slate-700">
            
            <div className="mb-8">
              <label className="block text-sm font-medium text-slate-300 mb-3">1. Загрузите фото комнаты</label>
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-slate-600 hover:border-primary-500 rounded-xl p-8 text-center cursor-pointer transition-colors group bg-slate-800/50"
              >
                <Upload className="w-10 h-10 mx-auto text-slate-500 group-hover:text-primary-500 mb-3 transition-colors" />
                <p className="text-slate-400 group-hover:text-white transition-colors font-medium">
                  Нажмите, чтобы выбрать фото
                </p>
                <p className="text-xs text-slate-500 mt-2">JPG, PNG до 5MB</p>
                <input 
                  ref={fileInputRef}
                  type="file" 
                  accept="image/*" 
                  onChange={handleImageUpload} 
                  className="hidden" 
                />
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-slate-300 mb-3">2. Что изменить?</label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Например: Сделай стены светло-серыми, добавь деревянный пол и современную люстру..."
                className="w-full h-32 bg-slate-900/80 border border-slate-600 rounded-xl p-4 text-white placeholder-slate-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none resize-none"
              />
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm flex items-center">
                <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                {error}
              </div>
            )}

            <Button 
              onClick={handleGenerate}
              disabled={!selectedImage || !prompt || loading}
              className="w-full shadow-xl shadow-primary-600/20"
              size="lg"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Генерация...
                </>
              ) : (
                <>
                  <Wand2 className="w-5 h-5 mr-2" />
                  Сгенерировать дизайн
                </>
              )}
            </Button>
          </div>

          {/* Preview Panel */}
          <div className="space-y-6">
            {/* Original */}
            {selectedImage && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-3xl overflow-hidden bg-slate-800 border border-slate-700 shadow-2xl relative"
              >
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-white z-10">
                  ИСХОДНОЕ ФОТО
                </div>
                <img src={selectedImage} alt="Original" className="w-full h-64 object-cover" />
              </motion.div>
            )}

            {/* Generated */}
            {generatedImage ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-3xl overflow-hidden bg-slate-800 border-2 border-primary-500 shadow-2xl shadow-primary-500/20 relative"
              >
                 <div className="absolute top-4 left-4 bg-primary-500 px-3 py-1 rounded-lg text-xs font-bold text-white z-10 shadow-lg">
                  РЕЗУЛЬТАТ AI
                </div>
                <img src={generatedImage} alt="AI Generated" className="w-full h-auto" />
              </motion.div>
            ) : (
               !selectedImage && (
                 <div className="h-full min-h-[300px] border-2 border-dashed border-slate-700 rounded-3xl flex flex-col items-center justify-center text-slate-600 bg-slate-800/20">
                    <ImageIcon className="w-16 h-16 mb-4 opacity-20" />
                    <p>Результат появится здесь</p>
                 </div>
               )
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
