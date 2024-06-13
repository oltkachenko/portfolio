'use client'

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import GridLayout from './common/GridLayout';
import type { SanityModuleContact } from '@/lib/sanity';
import ContactInfo from './modules/ContactInfo';
import PortableText from './portableText/PortableText';

interface FormStatus {
    message: string;
    status: 'success' | 'error'
}

interface Props {
    contact: SanityModuleContact;
    formTranslation: any
}

export default function ContactForm({formTranslation, contact}: Props) {
    const [formStatus, setFormStatus] = useState<FormStatus>()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = async (data: any) => {
        const { name, email, subject, message } = data;
    
        const res = await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify({ name, email, subject, message }),
        });

        if (!res.ok) {
            res.json().then(data => setFormStatus({
                message: data.message,
                status: 'error'
            }))

            return; 
        }
    
        res.json().then(data => setFormStatus({
            message: data.message,
            status: 'success'
        }))
        reset();
    };

    return (
        <GridLayout>
            <div className='contact'>
                <h2 className='contact-title'>{contact.title}</h2>
                
                <form 
                    onSubmit={handleSubmit((data) => onSubmit(data))}
                    className='form contact-form'
                >
                    {formStatus && <p className={`form-message ${formStatus.status}`}>{formStatus.message}</p>}

                    <div className='form-line'>
                        <div className='form_field'>
                            <label 
                                className='form_field-label'
                                htmlFor="form_contact_name"
                            >
                                <span className='form_field-required'>*</span>
                                {formTranslation.labelName}
                            </label>
                            <input 
                                id='form_contact_name'
                                className='form_field-input'
                                {...register('name', { 
                                    required: true 
                                })} 
                            />
                            {errors.name && <p className='form_field-error'>{formTranslation.formErrors.name}</p>}
                        </div>
                        
                        <div className='form_field'>
                            <label 
                                className='form_field-label'
                                htmlFor="form_contact_email"
                            >
                                <span className='form_field-required'>*</span>
                                {formTranslation.labelEmail}
                            </label>
                            <input
                                id='form_contact_email'
                                className='form_field-input'
                                {...register('email', { 
                                    required: true, 
                                    pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ 
                                })} 
                            />
                            {errors.email && <p className='form_field-error'>{formTranslation.formErrors.email}</p>}
                        </div>
                    </div>

                    
                    <div className='form_field'>
                        <label 
                            className='form_field-label'
                            htmlFor="form_contact_subject"
                        >
                            <span className='form_field-required'>*</span>
                            {formTranslation.labelSubject}
                        </label>
                        <input
                            id='form_contact_subject'
                            className='form_field-input'
                            {...register('subject', { 
                                required: true 
                            })}
                        />
                        {errors.subject && <p className='form_field-error'>{formTranslation.formErrors.subject}</p>}
                    </div>

                    <div className='form_field'>
                        <label 
                            className='form_field-label'
                            htmlFor="form_contact_message"
                        >
                            <span className='form_field-required'>*</span>
                            {formTranslation.labelMessage}
                        </label>
                        <textarea
                            id='form_contact_message'
                            className='form_field-textarea'
                            {...register("message", { 
                                required: true, 
                                minLength: 2 
                            })}
                        />
                        {errors.message && (
                            <p className='form_field-error'>{formTranslation.formErrors.message}</p>
                        )}
                    </div>

                    <button 
                        type="submit" 
                        disabled={ isSubmitting }
                        className='button width_full'
                    >
                        {formTranslation?.buttonName}
                    </button>
                </form>

                <div className='contact-info'>
                    <PortableText blocks={contact.body} className='contact-body'/>
                    
                    {contact.contactInfo && (
                        <div className='contact-tiles'>
                            {contact.contactInfo.map(info => (
                                <ContactInfo key={info._id} info={info} />
                            ))}
                        </div>
                    )}
                </div>
                
            </div>
        </GridLayout>
    )
}
