<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class EnquiryMail extends Mailable
{
    use Queueable, SerializesModels;

    public $from_first_name;
    public $from_last_name;
    public $from_industry;
    public $from_subject;
    public $from_email;
    public $from_phone;
    public $from_company;
    public $from_message;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($from_first_name,$from_last_name,$from_email, $from_phone, $from_company, $from_industry,$from_subject,$from_message)
    {

        $this->from_first_name = $from_first_name;
        $this->from_last_name = $from_last_name;
        $this->from_industry = $from_industry;
        $this->from_subject = $from_subject;
        $this->from_email = $from_email;
        $this->from_phone = $from_phone;
        $this->from_company = $from_company;
        $this->from_message = $from_message;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->replyTo($this->from_email)->from($this->from_email,$this->from_first_name,$this->from_last_name)->markdown('emails.contact');
    }
}
