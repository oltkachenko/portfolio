import React from 'react'
import EmailHeader from './EmailHeader';
import EmailFooter from './EmailFooter';

export default function EmailLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <table className="pc-project-body" style={{tableLayout: 'fixed', minWidth: '600px', backgroundColor:'#f4f4f4'}} bgcolor="#f4f4f4" width="100%" border={0} cellSpacing="0" cellPadding="0" role="presentation">
            <tr>
                <td style={{padding: '20px 0px 20px 0px'}} align="center" valign="top">
                    <table className="pc-project-container" style={{width: '600px', maxWidth: '600px'}} width="600" align="center" border={0} cellPadding="0" cellSpacing="0" role="presentation">
                        <tr>
                            <td align="left" valign="top">
                                <EmailHeader />
                            </td>
                        </tr>
                        <tr>
                            <td align="left" valign="top">
                                {children}
                            </td>
                        </tr>
                        <tr>
                            <td align="left" valign="top">
                                <EmailFooter />
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    )
}
