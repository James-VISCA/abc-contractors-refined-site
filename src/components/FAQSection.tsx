
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary depending on scope and complexity. Small renovations may take 1-2 weeks, while larger projects like extensions can take 8-12 weeks. We provide detailed timelines during our initial consultation.'
    },
    {
      question: 'Do you provide free estimates?',
      answer: 'Yes, we offer free, no-obligation estimates for all projects. We\'ll visit your property to assess the work required and provide you with a detailed written quote.'
    },
    {
      question: 'Are you fully licensed and insured?',
      answer: 'Absolutely. ABC Contractors is fully licensed, bonded, and insured. We carry comprehensive liability insurance and all necessary trade certifications to ensure your peace of mind.'
    },
    {
      question: 'What areas do you serve?',
      answer: 'We proudly serve South Devon and surrounding areas. We\'ve been part of this community for over 40 years and are committed to serving local residents and businesses.'
    },
    {
      question: 'Do you handle permits and planning applications?',
      answer: 'Yes, we can assist with obtaining necessary permits and planning applications. Our experience with local regulations ensures your project complies with all building codes and requirements.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept various payment methods including bank transfers, checks, and cash. For larger projects, we typically work with a payment schedule tied to project milestones.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 heading-spacing">
            Frequently Asked <span className="font-medium text-yellow-500">Questions</span>
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our services and process
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full animate-fade-in-up">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
              <AccordionTrigger className="text-left text-lg font-medium text-gray-900 hover:text-yellow-600 transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-body leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
