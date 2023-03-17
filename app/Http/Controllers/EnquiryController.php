<?php

namespace App\Http\Controllers;

use App\Mail\EnquiryMail;
use App\Models\Enquiry;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Validation\ValidationException;

class EnquiryController extends Controller
{
    public function enguiry(){
//            dd(\request()->all());
        try {
            $this->validate(request(), [
                'first_name' => 'required',
                'last_name' => 'required',
                'phone' => 'required|numeric',
                'email' => 'required|email',
                'subject' => 'required|string',
                'company' => 'required|string',
                'industry' => 'required|string',
                'message' => 'required',
            ]);
        } catch (ValidationException $e) {
        }

        Mail::to("info@gitc.gov.gh")
            ->send(new EnquiryMail(request()->first_name,request()->last_name,request()->subject,request()->industry,request()->email,request()->phone,request()->company,request()->message));
        return response()->json(array(
            'message'=>"Message successfully sent. A representative will attend to you shortly !!!",
        ));
    }
    public function store(Request $request){


        $request->validate([
                'first_name' => 'required',
                'last_name' => 'required',
                'phone' => 'required|numeric',
                'email' => 'required|email',
                'subject' => 'required|string',
                'company' => 'required|string',
                'industry' => 'required|string',
                'message' => 'required',
            ]);

//        dd(\request()->all());

            DB::transaction(function () use ($request) {

                $data['enquiries'] = Enquiry::create([
                    'first_name' => $request->first_name,
                    'last_name' => $request->last_name,
                    'email' => $request->email,
                    'subject' => $request->subject,
                    'message' => $request->message,
                    'phone' => $request->phone,
                    'company' => $request->company,
                    'industry' => $request->industry,
                ]);

            });

        return back()->with([
            'success' => 'User has been created',
        ]);


    }

    public function deleteEnquiries(Enquiry $enquiry)
    {
        $enquiry->delete();
        if ($enquiry) {
            return response()->json([
                'message' => "User deleted ",
                'data' => $enquiry,
                'code' => 200
            ],200);
        } else {
            return response()->json([
                'message' => "Request  unsuccessful ",
                'code'=>400
            ],400);
        }
    }

    public function search(Request $request)
    {

        if (request()->user('sanctum')) {
            $data['enguiries'] = Enquiry::where('subject', 'LIKE', "%{$request->subject}%")->get();

            //checking if request exit
            if ($data) {
                return response()->json([
                    'data' => $data,
                    'message' => "Record found",
                    'code' => 200,
                ], 200);
            } else {
                return response()->json([
                    'message' => "No record found",
                    'code' => 404,
                ], 404);
            }
        } else {
            return response()->json([
                "message" => "Please Login First",
                "code" => 403,

            ], 403);
        }
    }


    // incomplete end point
    public function reply(Enquiry $enquiry){
//            dd(\request()->all());
        try {
            $this->validate(request(), [
                'message' => 'required',
            ]);
        } catch (ValidationException $e) {
        }

        Mail::to("info@gitc.gov.gh")
            ->send(new EnquiryMail(request()->first_name,request()->last_name,request()->subject,request()->industry,request()->email,request()->phone,request()->company,request()->message));
        return response()->json(array(
            'message'=>"Message successfully sent. A representative will attend to you shortly !!!",
        ));
    }
}
