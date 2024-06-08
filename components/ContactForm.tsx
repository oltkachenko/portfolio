'use client'

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import GridLayout from './common/GridLayout';
import type { SanityModuleContact } from '@/lib/sanity';
import ContactInfo from './modules/ContactInfo';

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
                <form 
                    onSubmit={handleSubmit((data) => onSubmit(data))}
                    className='form contact-form'
                >
                    {formStatus && <p className={`form-message ${formStatus.status}`}>{formStatus.message}</p>}

                    <div className='form-line'>
                        <div className='form_field'>
                            <label className='form_field-label'>
                                <span className='form_field-required'>*</span>
                                {formTranslation.labelName}
                            </label>
                            <input 
                                className='form_field-input'
                                {...register('name', { 
                                    required: true 
                                })} 
                            />
                            {errors.name && <p className='form_field-error'>{formTranslation.formErrors.name}</p>}
                        </div>
                        
                        <div className='form_field'>
                            <label className='form_field-label'>
                                <span className='form_field-required'>*</span>
                                {formTranslation.labelEmail}
                            </label>
                            <input 
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
                        <label className='form_field-label'>
                            <span className='form_field-required'>*</span>
                            {formTranslation.labelSubject}
                        </label>
                        <input 
                            className='form_field-input'
                            {...register('subject', { 
                                required: true 
                            })}
                        />
                        {errors.subject && <p className='form_field-error'>{formTranslation.formErrors.subject}</p>}
                    </div>

                    <div className='form_field'>
                        <label className='form_field-label'>
                            <span className='form_field-required'>*</span>
                            {formTranslation.labelMessage}
                        </label>
                        <textarea
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
                    <h4 className='contact-title'>{contact.title}</h4>
                    <p className='contact-body'>{contact.body}</p>
                    
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
