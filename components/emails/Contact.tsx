import * as React from 'react';
import EmailLayout from './partial/EmailLayout';

interface EmailTemplateProps {
    firstName: string;
    message: string,
    email: string
}

export const Contact: React.FC<Readonly<EmailTemplateProps>> = ({
    firstName,
    message,
    email
}) => (
    <EmailLayout>
        <table width="100%" border={0} cellSpacing="0" cellPadding="0" role="presentation">
            <tr>
                <td>
                    <table width="100%" border={0} cellSpacing="0" cellPadding="0" role="presentation">
                        <tr>
                            <td valign="top" style={{padding: '40px 60px 40px 60px', borderRadius: '0px', backgroundColor: '#ffffff'}}>
                                <table width="100%" border={0} cellPadding="0" cellSpacing="0" role="presentation">
                                    <tr>
                                        <td align="left" valign="top" style={{padding: '0px 0px 20px 0px'}}>
                                            <table border={0} cellPadding="0" cellSpacing="0" role="presentation" width="100%" style={{borderCollapse: 'separate', borderSpacing: '0', marginRight: 'auto', marginLeft: 'auto'}}>
                                                <tr>
                                                    <td valign="top" align="left">
                                                        <div style={{lineHeight: '128%', letterSpacing: '-0.6px', fontFamily: "'Fira Sans', Arial, Helvetica, sans-serif", fontSize: '36px', fontWeight: '800', fontVariantLigatures: 'normal', color: '#151515'}}>
                                                            Hello!
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                                <table width="100%" border={0} cellPadding="0" cellSpacing="0" role="presentation">
                                    <tr>
                                        <td align="left" valign="top" style={{padding: '0px 0px 20px 0px'}}>
                                            <table border={0} cellPadding="0" cellSpacing="0" role="presentation" width="100%" style={{borderCollapse: 'separate', borderSpacing: '0', marginRight: 'auto', marginLeft: 'auto'}}>
                                                <tr>
                                                    <td valign="top" align="left">
                                                        <div style={{lineHeight: '140%', letterSpacing: '-0.2px', fontFamily: "'Fira Sans', Arial, Helvetica, sans-serif", fontSize: '20px', fontWeight: 'normal', fontVariantLigatures: 'normal', color: '#1b1b1b'}}>
                                                        Name: {firstName}
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                                <table width="100%" border={0} cellPadding="0" cellSpacing="0" role="presentation">
                                    <tr>
                                        <td align="left" valign="top" style={{padding: '0px 0px 20px 0px'}}>
                                            <table border={0} cellPadding="0" cellSpacing="0" role="presentation" width="100%" style={{borderCollapse: 'separate', borderSpacing: '0', marginRight: 'auto', marginLeft: 'auto'}}>
                                                <tr>
                                                    <td valign="top" align="left">
                                                        <div style={{lineHeight: '140%', letterSpacing: '-0.2px', fontFamily: "'Fira Sans', Arial, Helvetica, sans-serif", fontSize: '20px', fontWeight: 'normal', fontVariantLigatures: 'normal', color: '#1b1b1b'}}>
                                                        Email: {'<'}{email}{'>'}
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                                <table width="100%" border={0} cellPadding="0" cellSpacing="0" role="presentation">
                                    <tr>
                                        <td align="left" valign="top" style={{padding: '0px 0px 20px 0px'}}>
                                            <table border={0} cellPadding="0" cellSpacing="0" role="presentation" width="100%" style={{borderCollapse: 'separate', borderSpacing: '0', marginRight: 'auto', marginLeft: 'auto'}}>
                                                <tr>
                                                    <td valign="top" align="left">
                                                        <div style={{lineHeight: '140%', letterSpacing: '-0.2px', fontFamily: "'Fira Sans', Arial, Helvetica, sans-serif", fontSize: '20px', fontWeight: 'normal', fontVariantLigatures: 'normal', color: '#1b1b1b'}}>
                                                            {message}
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </EmailLayout>
);

