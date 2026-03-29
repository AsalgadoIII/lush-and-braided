import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar as CalendarIcon, Clock, ChevronRight, Check } from 'lucide-react';

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const TIMES = ['09:00 AM', '11:30 AM', '02:00 PM', '04:30 PM'];

export default function Booking() {
  const [selectedDay, setSelectedDay] = useState('Mon');
  const [selectedTime, setSelectedTime] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  const handleBook = () => {
    if (selectedTime) {
      setIsBooked(true);
      setTimeout(() => setIsBooked(false), 3000);
    }
  };

  return (
    <section id="booking" className="py-24 px-6 bg-brand-rose/5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl mb-8 italic">Secure Your Session</h2>
          <p className="text-xl text-brand-ink/70 mb-12 leading-relaxed">
            Ready for a transformation? Our independent studio offers a private, luxurious experience tailored to your schedule.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-sm border border-brand-rose/10">
              <div className="w-12 h-12 rounded-full bg-brand-rose/20 flex items-center justify-center text-brand-rose">
                <CalendarIcon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-medium">Flexible Scheduling</h4>
                <p className="text-sm text-brand-ink/50">Book up to 4 weeks in advance</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-sm border border-brand-rose/10">
              <div className="w-12 h-12 rounded-full bg-brand-rose/20 flex items-center justify-center text-brand-rose">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-medium">Express Consultations</h4>
                <p className="text-sm text-brand-ink/50">15-min prep calls included</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl border border-brand-rose/10"
        >
          <div className="mb-8">
            <h3 className="text-2xl font-serif italic mb-6">Select a Date</h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              {DAYS.map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`py-3 rounded-2xl text-sm font-medium transition-all ${
                    selectedDay === day
                      ? 'bg-brand-ink text-brand-cream shadow-lg'
                      : 'bg-brand-cream text-brand-ink hover:bg-brand-rose/10'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-serif italic mb-6">Available Times</h3>
            <div className="grid grid-cols-2 gap-3">
              {TIMES.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`py-4 rounded-2xl text-sm font-medium border transition-all ${
                    selectedTime === time
                      ? 'border-brand-rose bg-brand-rose/5 text-brand-rose shadow-inner'
                      : 'border-brand-rose/10 hover:border-brand-rose/40'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleBook}
            disabled={!selectedTime || isBooked}
            className={`w-full py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3 ${
              isBooked
                ? 'bg-green-500 text-white'
                : 'bg-brand-rose text-brand-ink hover:bg-brand-rose/90 shadow-xl hover:shadow-brand-rose/20'
            }`}
          >
            {isBooked ? (
              <>
                <Check className="w-6 h-6" />
                Confirmed
              </>
            ) : (
              <>
                Book Appointment
                <ChevronRight className="w-6 h-6" />
              </>
            )}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
