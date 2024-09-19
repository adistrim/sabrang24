import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, X } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const EarlyBirdPopup = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed z-50 top-4 right-4 w-84"
        >
          <Alert variant="default">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Early Bird Offer!</AlertTitle>
            <AlertDescription>
              <p>Early Bird Ticket now at Rs. <span className="line-through">399</span> 299</p>
              <p className="text-sm text-muted-foreground">Valid till 5th October</p>
            </AlertDescription>
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <X size={16} />
            </button>
          </Alert>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EarlyBirdPopup;