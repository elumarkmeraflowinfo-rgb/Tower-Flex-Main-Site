'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './SmartQuote.module.css';

type Step = 'category' | 'capacity' | 'location' | 'result';

interface QuoteState {
    category: 'tank' | 'structure' | null;
    capacity: 'small' | 'medium' | 'large' | null;
    location: 'domestic' | 'international' | null;
}

export default function SmartQuote() {
    const [step, setStep] = useState<Step>('category');
    const [data, setData] = useState<QuoteState>({ category: null, capacity: null, location: null });
    const [price, setPrice] = useState<string>('');

    const calculatePrice = (finalData: QuoteState) => {
        let base = 10000;
        if (finalData.category === 'structure') base *= 1.5;

        if (finalData.capacity === 'medium') base *= 2;
        if (finalData.capacity === 'large') base *= 5;

        if (finalData.location === 'international') base *= 1.2;

        setPrice(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(base));
    };

    const next = (key: keyof QuoteState, value: any) => {
        const newData = { ...data, [key]: value };
        setData(newData);

        if (step === 'category') setStep('capacity');
        else if (step === 'capacity') setStep('location');
        else if (step === 'location') {
            calculatePrice(newData);
            setStep('result');
        }
    };

    const reset = () => {
        setData({ category: null, capacity: null, location: null });
        setStep('category');
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2 className={styles.title}>AI ESTIMATOR</h2>
                <div className="text-xs uppercase tracking-widest opacity-50">Step: {step}</div>
            </div>

            <AnimatePresence mode="wait">
                {step === 'category' && (
                    <motion.div
                        key="category"
                        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                    >
                        <h3 className={styles.question}>What are we building?</h3>
                        <div className={styles.options}>
                            <button className={styles.button} onClick={() => next('category', 'tank')}>Industrial Tank</button>
                            <button className={styles.button} onClick={() => next('category', 'structure')}>Steel Structure</button>
                        </div>
                    </motion.div>
                )}

                {step === 'capacity' && (
                    <motion.div
                        key="capacity"
                        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                    >
                        <h3 className={styles.question}>Define scale/capacity.</h3>
                        <div className={styles.options}>
                            <button className={styles.button} onClick={() => next('capacity', 'small')}>Small (&lt; 100 Tons)</button>
                            <button className={styles.button} onClick={() => next('capacity', 'medium')}>Medium (100 - 500 Tons)</button>
                            <button className={styles.button} onClick={() => next('capacity', 'large')}>Large (&gt; 500 Tons)</button>
                        </div>
                    </motion.div>
                )}

                {step === 'location' && (
                    <motion.div
                        key="location"
                        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                    >
                        <h3 className={styles.question}>Project Location?</h3>
                        <div className={styles.options}>
                            <button className={styles.button} onClick={() => next('location', 'domestic')}>Domestic (US/EU)</button>
                            <button className={styles.button} onClick={() => next('location', 'international')}>International (Global Shipping)</button>
                        </div>
                    </motion.div>
                )}

                {step === 'result' && (
                    <motion.div
                        key="result"
                        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                        className={styles.result}
                    >
                        <h3 className="text-sm uppercase tracking-widest mb-4">Estimated Range</h3>
                        <div className={styles.price}>{price}</div>
                        <p className={styles.disclaimer}>*Subject to final engineering review. This is a rough estimate.</p>
                        <button className={styles.resetButton} onClick={reset}>Start Over</button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
