import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What are your prices?',
      answer: 'Our prices vary depending on the product specifications and order quantity. Contact us for a detailed quote.',
    },
    {
      question: 'Do you have a minimum order quantity?',
      answer: 'Yes, we require all international orders to have an ongoing minimum order quantity. If you are looking to resell but in much smaller quantities, we recommend you check out our website.',
    },
    {
      question: 'Can you supply the relevant documentation?',
      answer: 'Yes, we can provide most documentation including Certificates of Analysis / Conformance; Insurance; Origin, and other export documents where required.',
    },
    {
      question: 'What is the average lead time?',
      answer: `For samples, the lead time is about 7 days. For mass production, the lead time is 20-30 days after receiving the deposit payment. The lead times become effective when (1) we have received your deposit, and (2) we have your final approval for your products. If our lead times do not work with your deadline, please go over your requirements with your sale. In all cases we will try to accommodate your needs. In most cases we are able to do so.`,
    },
    {
      question: 'What kinds of payment methods do you accept?',
      answer: `You can make the payment to our bank account, Western Union or PayPal:
30% deposit in advance, 70% balance against the copy of B/L.`,
    },
    {
      question: 'What is the product warranty?',
      answer: 'We warranty our materials and workmanship. Our commitment is to your satisfaction with our products. In warranty or not, it is the culture of our company to address and resolve all customer issues to everyone’s satisfaction.',
    },
    {
      question: 'Do you guarantee safe and secure delivery of products?',
      answer: 'Yes, we always use high quality export packaging. We also use specialized hazard packing for dangerous goods and validated cold storage shippers for temperature sensitive items. Specialist packaging and non-standard packing requirements may incur an additional charge.',
    },
    {
      question: 'How about the shipping fees?',
      answer: 'Shipping fees vary depending on location and order size. Contact us for a shipping quote.The shipping cost depends on the way you choose to get the goods. Express is normally the most quickest but also most expensive way. By seafreight is the best solution for big amounts. Exactly freight rates we can only give you if we know the details of amount, weight and way. Please contact us for further information.',
    },
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
    <Header />
    <section className="bg-gray-100 py-16 mt-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-gray-600">Find the answers to our most commonly asked questions below.</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b-2 border-gray-200">
              <button
                className="w-full flex justify-between items-center py-4 text-left text-lg text-gray-700 focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span>{faq.question}</span>
                <span className="text-yellow-500">
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </button>
              {activeIndex === index && (
                <div className="py-2 text-gray-600 transition-all duration-300 ease-in-out">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default Faq;
